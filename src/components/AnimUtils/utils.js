import anime from 'animejs';

const controlSpeed = (e, target, controller) => {
  const isWheelDeltaYPlus = e.deltaY > 0;
  anime.remove(target);
  anime({
    targets: target,
    current: isWheelDeltaYPlus ? target.current + 50 : target.current - 50,
    update: () => controller.setSpeed(target.current / 100),
    easing: 'linear',
    duration: 100,
    complete: () => anime({
      targets: target,
      current: 50,
      update: () => controller.setSpeed(target.current / 100),
      easing: 'linear',
      duration: 1000,
    })
  })
}

export default {
  controlSpeed,
}
