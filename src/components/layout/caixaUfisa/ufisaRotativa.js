import style from '../../../styles/caixaUfisa.module.css'
import { ActionKind, usePony } from "pony-props";

export const MyCarousel = () => {
  const items = [
        { id: 1, ano: "2021", valor: "R$ 100,20" },
        { id: 2, ano: "2020", valor: "R$ 190,20" }, 
        { id: 3, ano: "2019", valor: "R$ 290,20" }, 
        { id: 4, ano: "2018", valor: "R$ 90,20" }];
  
  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state
  } = usePony({ numItems: items.length });

  return (
    
      
      <div className={style.ufisaRotativa}{...getSectionProps()}>
        <button className={style.button} {...getButtonProps(ActionKind.Previous)}> <img alt='' src='/setaLeft.png'/> </button>
        <h1 hidden {...getHeadingProps()}></h1>
        <div  className={style.container}{...getCarouselWrapperProps()}>
          <ul  {...getCarouselProps()}>
            {items.map((item, idx) => (
              <li  key={idx} {...getCarouselItemProps(idx)}>
                <div style={{padding:'0px'}}>
                    <div style={{color:'#FF7816', fontWeight:'bolder', fontSize:'11px', padding:'0px'}}>UFISA {item.ano}</div>
                    <div style={{ fontSize:'13px'}}>{item.valor}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <button className={style.button}{...getButtonProps(ActionKind.Next)}><img alt='' src='/setaRight.png'/></button>
        <div hidden {...getAnnouncerProps()}>
          <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
        </div>
      </div>
    
  );
};