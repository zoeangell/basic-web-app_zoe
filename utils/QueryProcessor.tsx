export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return (
      "Your andrewid is zangell"
    );
  }

  if(query == "What is your name?"){
    return (
      "Zoe"
    );
  }

  if(query.toLowerCase().includes("plus")){
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  }

  if(query.toLowerCase().includes("minus")){
    const addMatch = query.match(/What is (\d+) minus (\d+)/);
    if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x-y).toString();
  }
  }

  if(query.toLowerCase().includes("multiplied")){
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x*y).toString();
  }
  }


  if(query.toLowerCase().includes("largest")){
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
    if(addMatch){
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      var numbers = [x, y, z];
      console.log(numbers);
      return Math.max(...numbers).toString();
    }
  }

  

  return "";
}
