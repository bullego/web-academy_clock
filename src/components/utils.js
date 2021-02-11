//get random color
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
	
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


//create current time/date/day
export const createDate = (showViewName) => {
  const d = new Date();

  const getTime = () => {
    return d.toLocaleTimeString();
  }
  
  const getDate = () => {
    return d.toLocaleDateString();
  }

  const getDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[d.getDay()].toString();
    const date = d.getDate().toString();
    const today = day + '/' + date;

    return today;
  }

  if(showViewName === 'time') {    
    return getTime();
  } 
  if(showViewName === 'date') {
    return getDate();
  }
  if(showViewName === 'day') {
    return getDay();
  }
}
