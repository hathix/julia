(function (a, c, d) {
  "use strict";
  function g(W) {
    var X, Y, Z, aa, ba, ca, da, _ = W.target.files;
    for (Y = 0; Z = _[Y]; Y += 1) Z.type.match("image.*") && (aa = new FileReader, aa.onload = function () {
      return function (fa) {
        X = c.createElement("img"), X.onload = function () {
          ba = X.width, ca = X.height, da = V(ba, ca), O.width = da, O.height = da, O.getContext("2d").drawImage(X, (X.width - da) / 2, (X.height - da) / 2, da, da, 0, 0, O.width, O.height), N.width = V(400, da), N.height = V(400, da), N.getContext("2d").drawImage(X, (X.width - da) / 2, (X.height - da) / 2, da, da, 0, 0, N.width, N.height), l(N), A[2].getContext("2d").drawImage(P, 0, 0, 100, 100), G.generate(), D.redraw();
        }, X.src = fa.target.result;
      };
    }(Z), aa.readAsDataURL(Z));
  }
  function l(W) {
    P.width = W.width, P.height = W.height, P.getContext("2d").drawImage(W, 0, 0), M = P.getContext("2d").getImageData(0, 0, P.width, P.height).data;
  }
  function m(W, X, Y) {
    for (var Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = []; ca < z && 4 > aa * aa + ba * ba;) 2 === Y ? (aa = Z * Z - _ * _ + W, ba = 2 * Z * _ + X) : 3 === Y ? (aa = Z * Z * Z - 3 * Z * _ * _ + W, ba = 3 * Z * Z * _ - _ * _ * _ + X) : 4 === Y ? (aa = Z * Z * Z * Z - 6 * Z * Z * _ * _ + _ * _ * _ * _ + W, ba = 4 * Z * Z * Z * _ - 4 * Z * _ * _ * _ + X) : 5 == Y && (aa = Z * Z * Z * Z * Z - 10 * Z * Z * Z * _ * _ + 5 * Z * _ * _ * _ * _ + W, ba = 5 * Z * Z * Z * Z * _ - 10 * Z * Z * _ * _ * _ + _ * _ * _ * _ * _ + X), Z = aa, _ = ba, ca += 1;
    return da = ca === z ? [200, 200, 200, 255] : [255, 255, 255, 255], da;
  }
  function n(W, X, Y) {
    var Z, _, aa, ba, ca, da, ga, ha, ia, ea = P.width, fa = 0, ja = {}, ka = false;
    for (K ? (aa = W, ba = X, Z = Y.x, _ = Y.y) : (Z = W, _ = X, aa = 0, ba = 0); fa < z && !ka;) 2 === I ? (ca = aa * aa - ba * ba + Z, da = 2 * aa * ba + _) : 3 === I ? (ca = aa * aa * aa - 3 * aa * ba * ba + Z, da = 3 * aa * aa * ba - ba * ba * ba + _) : 4 === I ? (ca = aa * aa * aa * aa - 6 * aa * aa * ba * ba + ba * ba * ba * ba + Z, da = 4 * aa * aa * aa * ba - 4 * aa * ba * ba * ba + _) : 5 == I && (ca = aa * aa * aa * aa * aa - 10 * aa * aa * aa * ba * ba + 5 * aa * ba * ba * ba * ba + Z, da = 5 * aa * aa * aa * aa * ba - 10 * aa * aa * ba * ba * ba + ba * ba * ba * ba * ba + _), aa = ca, ba = da, fa += 1, ha = ca - E.x, ia = da - E.y, ha < F && ha > -F && ia < F && ia > -F && (ka = true);
    return ja.inside = ka, ka ? (W = S(.5 * ((ha + F) / F) * ea), X = S(.5 * ((ia + F) / F) * ea), ga = 4 * (X * ea + W), ja.value = [], ja.value[0] = M[ga], ja.value[1] = M[ga + 1], ja.value[2] = M[ga + 2], ja.value[3] = M[ga + 3]) : ja.value = [0, 0, 0, 0], ja;
  }
  function o(W) {
    function X() {
      var aa, ba, da, ea, fa, la, ma, na, oa, ca = Y.size, ga = Y.matrix, ha = Y.coord, ia = Y.c, ja = Y.ctx.getImageData(0, 0, Y.size, Y.size), ka = ja.data;
      for (aa = Z; aa < _; aa += 1) for (ea = ha.dblXmin + aa * ha.deltaX, ba = 0; ba < ca; ba += 1) fa = ha.dblYmin + ba * ha.deltaY, da = n(ea, fa, ia), ga[aa][ba] = da, la = 4 * (ba * ca + aa), ma = ga[aa][ba].inside ? ga[aa][ba].value : L, ka[la] = ma[0], ka[la + 1] = ma[1], ka[la + 2] = ma[2], ka[la + 3] = 255;
      Y.ctx.putImageData(ja, 0, 0), A[0].getContext("2d").drawImage(Y.canvas, 0, 0, Y.canvas.width, Y.canvas.height, 0, 0, A[0].width, A[0].height), _ === ca ? J && (J = false, na = Q.toDataURL("image/png").replace("image/png", "image/octet-stream"), oa = c.createElement("a"), oa.appendChild(c.createTextNode("Download large image")), oa.className = "btn btn-primary mb-4", oa.href = na, oa.download = "ImageFractal.png", oa.title = "Download fractal", c.getElementById("ImageHolder").innerHTML = '<img src="' + na + '" width="2560" height="2560"/> <figcaption>2560 &times; 2560 fractal</figcaption>', c.getElementById("LinkHolder").appendChild(oa), c.getElementById("downloadMssg").innerHTML = "<em>Download large image</em> will not work in Chrome (or Safari) if the size of the image is too large. In that case, right-click on the image to download it and give it a png filename, or use Firefox.", l(N), Q.width = A[0].width, Q.height = A[0].width, Y.coord.intWidth = A[0].width, Y.coord.intHeight = A[0].width, Y.size = A[0].width, Y.coord.deltaX = (Y.coord.dblXmax - Y.coord.dblXmin) / A[0].width, Y.coord.deltaY = (Y.coord.dblYmax - Y.coord.dblYmin) / A[0].width) : (Z = _, _ = V(_ + 100, ca), J && (c.getElementById("ImageHolder").innerHTML = "... generating image ... " + Math.round(100 * (Z / ca)) + "%"), a.requestAnimationFrame(X));
    }
    var Z, _, Y = {};
    return Y.canvas = W.canvas, Y.size = W.canvas.width, Y.coord = W.coord, Y.ctx = W.canvas.getContext("2d"), Y.c = W.c, Y.matrix = [], Y.update = function (aa) {
      Y.coord.intWidth = aa, Y.coord.intHeight = aa, Y.size = aa, Y.coord.deltaX = (Y.coord.dblXmax - Y.coord.dblXmin) / aa, Y.coord.deltaY = (Y.coord.dblYmax - Y.coord.dblYmin) / aa, Y.generate();
    }, Y.generate = function () {
      var aa, ca, ba = Y.size;
      for (aa = 0; aa < ba; aa += 1) for (Y.matrix[aa] = [], ca = 0; ca < ba; ca += 1) Y.matrix[aa][ca] = 0;
      Z = 0, _ = 100, a.requestAnimationFrame(X);
    }, Y;
  }
  function p() {
    var W;
    W = V(.8 * A[0].parentNode.offsetWidth, 500), W = U(100 * S(W / 100), 200), W !== A[0].width && (A[0].width = W, A[0].height = W, W = V(S(W / 2), 250), A[1].width = W, A[1].height = W);
  }
  function q() {
    p(), A[0].width !== G.coord.intWidth && G.update(A[0].width), D.redraw();
  }
  function r() {
    function W(Y, Z) {
      var aa, ba, ca, da, _ = C(Y), ea = {}, fa = Z.coord;
      aa = (fa.dblXmax - fa.dblXmin) / 3, ba = (fa.dblYmax - fa.dblYmin) / 3, ca = fa.dblXmin + _.X * (fa.dblXmax - fa.dblXmin) / fa.intWidth, da = fa.dblYmin + _.Y * (fa.dblYmax - fa.dblYmin) / fa.intHeight, ea = {intWidth: Z.canvas.width, intHeight: Z.canvas.height, dblXmin: ca - aa, dblXmax: ca + aa, dblYmin: da - ba, dblYmax: da + ba}, ea.deltaX = (ea.dblXmax - ea.dblXmin) / ea.intWidth, ea.deltaY = (ea.dblYmax - ea.dblYmin) / ea.intHeight, Z.coord = ea, Z.generate();
    }
    function X(Y, Z) {
      var _ = C(Y), aa = {};
      aa.x = Z.dblXmin + _.X * Z.deltaX, aa.y = Z.dblYmin + _.Y * Z.deltaY, G.c = aa, R.log("New Julia point = (" + aa.x + ", " + aa.y + ")"), G.generate();
    }
    a.addEventListener("resize", q, false), A[0].addEventListener("mousedown", function (Y) {
      Y.stopPropagation(), 3 !== Y.which && (H ? X(Y, G.coord) : W(Y, G));
    }, false), A[0].addEventListener("touchstart", function (Y) {
      Y.preventDefault(), Y.stopPropagation(), 3 !== Y.which && (H ? X(Y.changedTouches[0], G.coord) : W(Y.changedTouches[0], G));
    }, false);
  }
  function s() {
    var X, W = {}, Y = 8;
    return W.redraw = function () {
      var Z;
      Z = A[1].getContext("2d"), X = A[1].width, Z.fillStyle = "rgb(255, 255, 255)", Z.fillRect(0, 0, X, X), Z.save(), Z.drawImage(B[I - 2], X / 2 - 2 * X / Y, X / 2 - 2 * X / Y, 4 * X / Y, 4 * X / Y), Z.translate(X / 2, X / 2), Z.globalAlpha = .7, Z.drawImage(P, E.x * X / Y - F * X / Y, E.y * X / Y - F * X / Y, 2 * (F * X / Y), 2 * (F * X / Y)), Z.globalAlpha = 1, Z.restore();
    }, W.redraw(), A[1].addEventListener("mousedown", function (Z) {
      var _ = C(Z);
      Z.stopPropagation(), 3 !== Z.which && (E.x = -Y / 2 + _.X * Y / X, E.y = -Y / 2 + _.Y * Y / X, W.redraw(), G.generate());
    }, false), A[1].addEventListener("touchstart", function (Z) {
      var _ = C(Z.changedTouches[0]);
      Z.preventDefault(), Z.stopPropagation(), E.x = -Y / 2 + _.X * Y / X, E.y = -Y / 2 + _.Y * Y / X, W.redraw(), G.generate();
    }, false), W;
  }
  function t(W) {
    var X, Y = 2;
    return X = {intWidth: W.width, intHeight: W.height, dblXmin: -Y, dblXmax: Y, dblYmin: -Y, dblYmax: Y}, X.deltaX = (X.dblXmax - X.dblXmin) / X.intWidth, X.deltaY = (X.dblYmax - X.dblYmin) / X.intHeight, X;
  }
  function u() {
    var W, X, Y, _, aa, ba, ca, da, ea, fa, Z = 200;
    for (W = 0; 4 > W; W += 1) {
      for (B[W] = c.createElement("canvas"), B[W].width = Z, B[W].height = Z, aa = B[W].getContext("2d"), ba = aa.getImageData(0, 0, Z, Z), ca = ba.data, X = 0; X < Z; X += 1) for (da = -2 + 4 * X / Z, Y = 0; Y < Z; Y += 1) ea = -2 + 4 * Y / Z, fa = m(da, ea, W + 2), _ = 4 * (Y * Z + X), ca[_] = fa[0], ca[_ + 1] = fa[1], ca[_ + 2] = fa[2], ca[_ + 3] = 255;
      aa.putImageData(ba, 0, 0);
    }
  }
  var C, D, G, M, N, O, P, Q, z = 100, A = [], B = [], E = {x: 0, y: 0}, F = .5, H = true, I = 5, J = false, K = true, L = [0, 0, 0, 255], R = a.console, S = Math.floor, T = Math.round, U = Math.max, V = Math.min;
  C = function (W) {
    var X, Y, Z, _, aa;
    for (W.pageX && W.pageY ? (X = W.pageX, Y = W.pageY) : (X = W.clientX + c.body.scrollLeft + c.documentElement.scrollLeft, Y = W.clientY + c.body.scrollTop + c.documentElement.scrollTop), Z = 0, _ = 0, aa = W.target || W.srcElement; aa.offsetParent;) Z += aa.offsetLeft, _ += aa.offsetTop, aa = aa.offsetParent;
    return {X: X - Z, Y: Y - _};
  }, d("#bkgrColor").spectrum({color: "#000000"}), d("#bkgrColor").change(function () {
    var W;
    W = d(this).spectrum("get").toRgb(), L = [W.r, W.g, W.b, 255], G.generate();
  }), d("#zoomIn").change(function () {
    H = false;
  }), d("#pickJulia").change(function () {
    H = true;
  }), d("#resetJulia").click(function () {
    G.coord = t(G.canvas), G.generate();
  }), d("#squareSide").change(function () {
    F = this.value / 2, c.getElementById("squareSideDisplay").innerHTML = 2 * F, D.redraw(), G.generate();
  }), d("#degree").change(function () {
    I = T(this.value), D.redraw(), G.generate(), c.getElementById("degreeDisplay").innerHTML = I;
  }), d("#switch").click(function () {
    K = !K, c.getElementById("switch").innerHTML = K ? "Switch to Mandelbrot" : "Switch to Julia", G.generate();
  }), function () {
    var W, Y, _, aa, X = [], Z = {};
    for (u(), c.getElementById("generateLarge").addEventListener("click", function () {
      J || (Q.width = 2560, Q.height = 2560, l(O), J = true, c.getElementById("ImageHolder").innerHTML = "... generating large fractal ...", c.getElementById("LinkHolder").innerHTML = "", G.update(Q.width));
    }), X[0] = c.getElementById("JuliaContainer"), X[1] = c.getElementById("OrbitTrapContainer"), X[2] = c.getElementById("PhotoContainer"), W = 0; 3 > W; W += 1) A[W] = c.createElement("canvas"), A[W].className += "withborder", X[W].appendChild(A[W]);
    for (p(), Y = t(A[0]), Q = c.createElement("canvas"), Q.width = A[0].width, Q.height = A[0].width, Z = {canvas: Q, coord: Y, c: {x: .616, y: -0.04}}, _ = new Image, _.onload = function () {
      A[2].width = 100, A[2].height = 100, A[2].getContext("2d").drawImage(_, 0, 0, 100, 100), N = c.createElement("canvas"), O = c.createElement("canvas"), P = c.createElement("canvas"), aa = V(_.width, _.height), P.width = aa, P.height = aa, N.width = aa, N.height = aa, O.width = aa, O.height = aa, P.getContext("2d").drawImage(_, (_.width - aa) / 2, (_.height - aa) / 2, aa, aa, 0, 0, P.width, P.height), N.getContext("2d").drawImage(P, 0, 0), O.getContext("2d").drawImage(P, 0, 0), M = P.getContext("2d").getImageData(0, 0, P.width, P.height).data, r(), D = s(), G = o(Z), G.generate();
    }, _.src = "js/images/MonaLisaSmall.jpg", W = 0; 2 > W; W += 1) A[W].addEventListener("mousemove", function () {
      c.body.style.cursor = "crosshair";
    }, false), A[W].addEventListener("mouseleave", function () {
      c.body.style.cursor = "default";
    }, false);
    c.getElementById("files").onclick = function () {
      this.value = null;
    }, c.getElementById("files").addEventListener("change", g, false);
  }();
}(this, this.document, this.jQuery));
