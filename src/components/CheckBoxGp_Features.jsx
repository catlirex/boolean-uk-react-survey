export default function CheckBoxGp_Features({inputName, formValue, setReviewFrom, reviewForm}){

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
      ><input name={inputName} type="checkbox" 
      value="colour" 
      checked={formValue.some((target)=> target==="colour")? true: false}
      onChange={e=> handleOnChange(e)}/>It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="sound" 
      checked={formValue.some((target)=> target==="sound")? true: false}
      onChange={e=> handleOnChange(e)}/>It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="logo" 
      checked={formValue.some((target)=> target==="logo")? true: false}
      onChange={e=> handleOnChange(e)}/>It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name={inputName} type="checkbox" value="size" 
      checked={formValue.some((target)=> target==="size")? true: false}
      onChange={e=> handleOnChange(e)}/>Its big!</label
    >
  </li>
</ul>
    )
}
