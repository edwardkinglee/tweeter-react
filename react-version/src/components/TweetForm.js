import React from 'react'; //optional

  function TweetForm(){
    const placeHolder = "What are you humming about?"

    return (
      <section class="newtweet">
      <form method="post" action="/tweets" class="newtweet__form" onSubmit={(event) => { event.preventDefault();}}>
        <textarea class="form__textarea" name="text" placeholder={placeHolder}></textarea>
        <input type="submit" value="Tweet" class="form__input" />
        <span class="form__counter">140</span>
      </form>
    </section>
    );
  }

  export default TweetForm;