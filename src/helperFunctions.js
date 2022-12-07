
export const checkListStatus = (listArr) => {
  if(!listArr || listArr?.length == 0) return false 

  let status = true;
  listArr.forEach((item, index) => {
    if(item?.status == 'n'?.toLowerCase()) status = false
  })
  return status
}