const fitToWindow = (targetRef) => {
  const fullWidth = Math.min(window.screen.width,window.innerWidth);
  // const fullHeight = window.innerHeight;
  const curWidth = targetRef.current.clientWidth;
  const scaleForFitWidth = fullWidth / curWidth;
  // const expectedHeight = targetRef.current.clientHeight * scaleForFitWidth;
  targetRef.current.style.bottom = 0;
  targetRef.current.style.transform = `
    scale(${scaleForFitWidth})
  `;
}

export default {
  fitToWindow,
}