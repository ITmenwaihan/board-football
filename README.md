# React(@18.3) + TypeScript + Vite(@5.4) + react-router(@6)
# 项目一些功能
## 主题切换
  使用window.matchMedia('(prefers-color-scheme: light)') 来判断当前的主题
  然后在css中设置 html.dark  html.light 两个类  使用 document.documentElement.classList 设置html的class
  使用localStorage保存当前的theme
## 使用react-router来管理路由
  路由配置
  ```js
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ]
    }
  ]
```
## 大文件分片
```js

  const cutFile = async(file: any) => {
    return new Promise((resolve) => {
      const CHUNK_SIZE = 1024 * 1024 * 1;
      const THREAD_COUNT = window.navigator.hardwareConcurrency || 4;
      const chunk_count = Math.ceil(file.size / CHUNK_SIZE);
      const threadChunkCount = Math.ceil(chunk_count / THREAD_COUNT);
      const result: any = [];
      let finishCount = 0;
      for (let i = 0; i < Math.min(THREAD_COUNT, chunk_count); i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url),{type:'module'});
        let start = i * threadChunkCount;
        let end = (i + 1) * threadChunkCount;
        if (end > chunk_count) {
          end = chunk_count;
        }
        worker.postMessage({
          file,
          start,
          end,
          CHUNK_SIZE
        })
        worker.onmessage = (e) => {
          result[i] = e.data;
          worker.terminate();
          finishCount++;
          if (finishCount === Math.min(THREAD_COUNT, chunk_count)) {
            resolve(result.flat())
          }
        }
      }
    })
  }
```

       



