function screen(screenNum) {
  if (screenNum == 2) {
    document.getElementById('content-1').style.display = 'none';
    document.getElementById('content-2').style.display = 'block';
    document.getElementById('next-1').style.display = 'none';
    document.getElementById('next-2').style.display = 'flex';
  } else if (screenNum == 3) {
    document.getElementById('content-2').style.display = 'none';
    document.getElementById('content-3').style.display = 'block';
    document.getElementById('next-2').style.display = 'none';
    document.getElementById('next-3').style.display = 'flex';
  }
}