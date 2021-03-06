import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormsSubmission(event) {
    event.preventDefault();
    console.log(_names);
    console.log(_location);
    console.log(_issue);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormsSubmission}></form>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
        ref={(input) => {_names = input;}} />
        <input
          type='text'
          id='location'
          placeholder='Location'
        ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
        ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
