const readFilePsd = async () => {
  const fileName = document.getElementById('fileName').value;
  const { data } = await axios.get('/read_psd', { params: { fileName } });
  const { filesPath } = data;

  const listFileEl = document.getElementById('listFile');
  listFileEl.innerHTML = '';
  const docFrag = document.createDocumentFragment();
  filesPath.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    docFrag.appendChild(img);
  })

  listFileEl.appendChild(docFrag);
}
