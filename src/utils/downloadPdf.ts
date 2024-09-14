import html2canvas from "html2canvas";
import jspdf from "jspdf";

export function downloadPdf (className: string, name: string) {
  const elements = document.getElementsByClassName(className) as unknown as HTMLElement[];
  if (elements.length == 0) return;
  const tmpE = elements[0];
  html2canvas(tmpE, {
    useCORS: true,
  }).then((canvas) => {
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const pdfHight = 841.89;
    const pdfWidth = 595.28;
    const canvasHight = canvas.height;
    // const canvasWidth = canvas.width;
    //页面偏移
    let position = 0;
    let leftHeight = canvasHight
    const imgWidth = pdfWidth
		const imgHeight = pdfHight
    const pageData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jspdf('p', 'pt', 'a4');
    if (canvasHight < pdfHight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    }else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        leftHeight -= pdfWidth
        position += pdfHight
        if (leftHeight > 0) {
          pdf.addPage()
        }
      }
    }
    pdf.save(name + '.pdf')
  })
}
