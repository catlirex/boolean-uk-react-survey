export default function CheckBoxGp_SpendTime({inputName, formValue, setReviewFrom, reviewForm}){
  
  function handleOnChange(e){
    let updateForm = {...reviewForm}
    if (e.target.checked) updateForm[inputName] = [...updateForm[inputName], e.target.value]
    else updateForm[inputName] = updateForm[inputName].filter(target=> target!==e.target.value)
    setReviewFrom(updateForm)
  }
  
  return(
        <ul>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="swimming" 
      checked={formValue.some((target)=> target==="swimming")? true: false}
      onChange={e=> handleOnChange(e)}/>Swimming</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="bathing" 
      checked={formValue.some((target)=> target==="bathing")? true: false}
      onChange={e=> handleOnChange(e)}/>Bathing</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="chatting" 
      checked={formValue.some((target)=> target==="chatting")? true: false}
      onChange={e=> handleOnChange(e)}/>Chatting</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="noTime" 
      checked={formValue.some((target)=> target==="noTime")? true: false}
      onChange={e=> handleOnChange(e)}/>I don't like to spend time with it</label
    >
  </li>
</ul>
    )
}