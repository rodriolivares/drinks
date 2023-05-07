import S from '@/styles/elements/spinner.module.css'
const Spinner = () => {
   return (
      <div className={S.spinner}>
         <div className={S.bounce1}></div>
         <div className={S.bounce2}></div>
         <div className={S.bounce3}></div>
         {/* <div class={S.loader}></div> */}
      </div>

   )
}

export default Spinner