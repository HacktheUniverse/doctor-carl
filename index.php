<?php
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="assets/images/favicon.ico">
    
    <title>Doctor Carl</title>

    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="cover.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body onload="window.setTimeout('elizaReset()',100)">

    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand"></h3>
              <ul class="nav masthead-nav">
                
              </ul>
            </div>
          </div>

          <div class="inner cover">
            <h1 class="cover-heading" id="headline">Doctor Carl</h1>
            
            <FORM NAME="e_form" onsubmit="elizaStep();return false">
            <TEXTAREA NAME="e_display" COLS="60" ROWS="20"></TEXTAREA><BR>

            <INPUT TYPE="text" NAME="e_input" SIZE="50"><BR>
            </FORM>
            
            <p class="lead">
            <div class="share-tools">
              <a id="storylink" href="#" class="btn btn-lg btn-default" onclick=="elizaStep();return false">Talk</a>
              <a href="#" class="btn btn-lg btn-default" onclick="window.setTimeout('elizaReset()',100)">Reset</a>
              
                  </div>
            </p>
            <div class="footer-logos">
              <p>Other text</p>
              </div>
          </div>

          <div class="mastfoot">
            <div class="inner">
              
            </div>
          </div>

        </div>

      </div>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script>
    <script src="assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/ie10-viewport-bug-workaround.js"></script>
    <SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript" SRC="assets/js/elizabot.js"></SCRIPT>
    <SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript" SRC="assets/js/elizadata.js"></SCRIPT>

    <script>
    <!--

var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

function elizaReset() {
  eliza.reset();
  elizaLines.length = 0;
  elizaStep();
}

function elizaStep() {
  var f = document.forms.e_form;
  var userinput = f.e_input.value;
  if (eliza.quit) {
    f.e_input.value = '';
    if (confirm("This session is over.\nStart over?")) elizaReset();
    f.e_input.focus();
    return;
  }
  else if (userinput != '') {
    var usr = 'YOU:   ' + userinput;
    var rpl ='Doctor Carl: ' + eliza.transform(userinput);
    elizaLines.push(usr);
    elizaLines.push(rpl);
    // display nicely
    // (fit to textarea with last line free - reserved for extra line caused by word wrap)
    var temp  = new Array();
    var l = 0;
    for (var i=elizaLines.length-1; i>=0; i--) {
      l += 1 + Math.floor(elizaLines[i].length/displayCols);
      if (l >= displayRows) break
      else temp.push(elizaLines[i]);
    }
    elizaLines = temp.reverse();
    f.e_display.value = elizaLines.join('\n');
  }
  else if (elizaLines.length == 0) {
    // no input and no saved lines -> output initial
    var initial = 'Doctor Carl: ' + eliza.getInitial();
    elizaLines.push(initial);
    f.e_display.value = initial + '\n';
  }
  f.e_input.value = '';
  f.e_input.focus();
}

//-->
    </script>
  </body>
</html>
