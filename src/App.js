import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { marked } from 'marked';

<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.2/marked.min.js" integrity="sha512-YCrDB5/fPsWLy0vZ1sPc6m2n9vTrSfaxH4mdyQaZVa07MRJqai+5YeOzmflXBFdj5a1Rfvpn+g4XOq3f8yCThA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

const defaultText =  `# Hello, this is my Markdown Previewer!\n` +

"## Thank you so much for viewing my project! If you would like to check out my other projects you can visit my github page.\n" +

"[GitHub](https://coreydunndd.github.io/randomQuoteMachine/)\n" +

`<div style='font-family: "Comic Sans MS", "Comic Sans", cursive;'>
It is a pity, but markdown does **not** work in here for most markdown parsers.
[Marked] handles it pretty well.
</div>\n` +
`
\`This is a great way to get practice with JSX and React!\`
`

+
`
1. This
2. is
3. a
4. list.
`
+
`
\`\`\`
function codeBlock() {
  return multiLineCodeBlock;
}
\`\`\`

>This is the blockquote.


![Galaxies are always fascinating](https://img.freepik.com/free-vector/watercolor-galaxy-background_79603-2384.jpg?w=740&t=st=1668981142~exp=1668981742~hmac=9c7fdcc6a53500ff8fb622cac04b8a2cb442e56d038f6478fda7b604fe657fda)

I can't wait to work on my next **project**.
`

function updateText() {
  let textValue = document.getElementById("editor").value
  let markedText = marked(textValue)
  document.getElementById("preview").innerHTML = markedText
}

window.onload = updateText

function App() {
  return (
    <Container fluid id="container">
      <Row id="row">
        <h1 id="title">Markdown Previewer</h1>
      </Row>
      <Row id="row">
      <Col id="col">
        <br />
        <div id="editor-title"><h1>Editor</h1></div>
        <textarea id="editor" onKeyUp={updateText}>{defaultText}</textarea>
      </Col>
      </Row>
      <Row>
      <Col id="col">
      <div id="preview-title"><h1>Preview</h1></div>
      <div id="preview"></div>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
