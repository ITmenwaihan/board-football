import SparkMD5 from 'spark-md5-es';

const createChunk = (file, index, chunkSize) => {
  return new Promise((resolve) => {
    const start = index * chunkSize;
    const end = start + chunkSize;
    const reader = new FileReader();
    const blob = file.slice(start, end);
    const spark = new SparkMD5.ArrayBuffer()
    reader.onload = (e) => {
      spark.append(e?.target?.result)
      resolve({
        start,
        end,
        index,
        blob,
        hash: spark.end()
      })
    };
    reader.readAsArrayBuffer(blob)
  })
}

self.onmessage = async (e) => {
  const {
    file,
    start,
    end,
    CHUNK_SIZE } = e.data;
  const result = [];
  for (let i = start; i < end; i++) {
    const chunk = createChunk(file, i, CHUNK_SIZE);
    result.push(chunk);
  };
  const chunks = await Promise.all(result);
  self.postMessage(chunks);
}