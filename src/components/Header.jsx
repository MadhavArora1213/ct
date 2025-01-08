import React from 'react';

function Header() {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>On-Scroll Filter Effects | Codrops</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="Codrops" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/qsy7khk.css" />
      <link rel="stylesheet" type="text/css" href="css/base.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
      <script>
        {`document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");`}
      </script>
      <script src="//tympanus.net/codrops/adpacks/analytics.js"></script>
      <script src="js/Flip.min.js"></script>
      <script src="js/gsap.min.js"></script>
      <script src="js/lenis.min.js"></script>
      <script src="js/ScrollTrigger.min.js"></script>

    </head>
  );
}

export default Header;