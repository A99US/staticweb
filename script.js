var aceeditor = ace.edit('editor');
aceeditor.setOptions({
  wrap: true,
  fontSize: 18,
  tabSize: 2,
  // minLines:23, maxLines:23,
  autoScrollEditorIntoView: true,
  highlightActiveLine: false,
  vScrollBarAlwaysVisible: true,
});
aceeditor.setTheme('ace/theme/cobalt'); //  monokai dracula cobalt iplastic terminal
aceeditor.session.setValue('Halllo world\n'.repeat(25));
//aceeditor.focus();
//aceeditor.session.setMode('ace/mode/javascript');

$('#editorfind').click(function () {
  aceeditor.execCommand('find');
  //editor.searchBox.show()
});
$('#editorreplace').click(function () {
  aceeditor.execCommand('replace');
});

$('#editor').css({
  height: '350px',
  width: '750px',
  resize: 'both',
  overflow: 'hidden',
  border: 'solid 0px lightgray',
});
