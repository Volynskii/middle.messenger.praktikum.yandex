
export const tmpl = `
<label class="label" for="{{ label }}">{{ labelValue }}</label>
{{{ input }}}
<span id="error_{{ label }}" class="error displayNone">{{ errorMessage }}</span>
<br>
`;
