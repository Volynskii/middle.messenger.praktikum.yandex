
export const tmpl = `
   
<main class="auth">
<div class="wrapper-edit">
    {{{titleAuth}}}
    <form class="form">
    <div class="input-container">
    <input type="file" id="image-input" accept="image/*" >
    <img src="">
</div>
    
    {{{inputContainerEmail}}}
    {{{inputContainerLogin}}}
    {{{inputContainerFirstName}}}
    {{{inputContainerSecondName}}}
{{{inputContainerPhone}}}
{{{inputContainerPassword}}}
{{{inputContainerPasswordAgain}}}
{{{inputSubmit}}}
      {{{link}}}
    </form>
</div>
</main>
`;
