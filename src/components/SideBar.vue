<template>
    <head>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"
      />
      <title>SideBar Example</title>
      <link
        rel="stylesheet"
        href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"
      />
    </head>
    <body>
      <div id="content">
        <h1>This is the content area.</h1>
        The content area can be written as HTML and CSS.
        <p>This is some text.</p>
      </div>
      <div id="sidebar">
        <h2>This is the sidebar.</h2>
        The sidebar can be written as HTML and CSS.
        <p>This is some text.</p>
      </div>
      <div id="header"><img src="logo.png" alt="SideBar" /></div>
      <div id="footer"><img src="logo.png" alt="SideBar" /></div>
    </body>
</template>
<style type="text/css">
        #content {
          width: 500px;
          height: auto;
        }
        #sidebar {
          width: 250px;
          height: auto;
        }
        header {
          height: auto;
          margin-bottom: 50px;
        }
        footer {
          height: auto;
          margin-top: 50px;
        }
      </style>