function NavBar ({last, next}) {

return (
 <nav>
      <button className="btnPrecedent"onClick={last}>Précédent</button>
      <button className="btnSuivant"onClick={next}>Suivant</button>
</nav>
) 


}




export default NavBar