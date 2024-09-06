// 大文件上传
import './index.css';

function BigFile () {
  const renderPreview = (value: string) => {
    const img = document.createElement('img');
    img.height = 120;
    img.width = 150;
    img.src = value;
    const preview = document.getElementById('preview');
    preview?.appendChild(img)
  }

  const toBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve(e.target?.result)
      }
      reader.onerror = () => {
        reject(new Error('toBase64 error'))
      }
    })
  }

  

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


  const handelFileChange = async(e: any) => {
    // const res = await toBase64(file);
    const file = e.target.files[0]
    console.time()
    const chunks = await cutFile(file);
    console.timeEnd()
    console.log(chunks, 'chunks');
    
  }



  return (
    <>
      <div className="content">
        <div className="upload-area">
          <span>
            {'Cilck or drag file to this area upload'}
          </span>
          <input onChange={handelFileChange} id='input' type='file'></input>
        </div>
      </div>
      <div id='preview'></div>
    </>
  )

}

export default BigFile