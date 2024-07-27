document.getElementById('copy-button').addEventListener('click', function() {
    const noteContent = document.getElementById('note').value;
    navigator.clipboard.writeText(noteContent).then(() => {
      alert('textをクリップボードに保存しました');
      document.getElementById('note-content').innerText = noteContent;
    });
  });
  document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('note').value = '';
    document.getElementById('note-content').innerText = '';
    alert('メモの内容を削除しました');
  });