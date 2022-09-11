# `useId()` Hook

useId() bruges til at generere et unikt id til hvert component,
som bruges til at skabe en forbindelse imellem dine HTML elementer.

useId() laver et id som har ":" på hver side af sig, for at sikre
at man ikke kan bruge den i en querySelector i sin javascript

# `useContext()` Hook

useContext() bruges til at pass "props" til children af children
ved at neste dem ind i en Context Provider.

useContext er smart til at undgå at pass props ned igennem sin component nesting
at pass en prop til en component som ikke skal bruge den,
for at pass den videre til et child component, som skal bruge den,
hedder "Prop Drilling" - og det tager tid, og er "bad practice".
