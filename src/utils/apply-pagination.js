export function applyPagination(documents, page, rowsPerPage,setPage) {
  const FullDataSize=documents.length;
  if(FullDataSize < page * rowsPerPage){
    page=0;
    setPage(0);
  }
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}