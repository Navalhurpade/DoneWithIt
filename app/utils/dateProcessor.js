const currentDate = new Date();

function getDiffInDays(date) {
  const diffInMs = Math.abs(currentDate - date);
  return diffInMs / (1000 * 60 * 60 * 24);
}

function getDiffInHours(date) {
  const diffInMs = Math.abs(currentDate - date);
  return diffInMs / (1000 * 60 * 60);
}

function getDiffInMinutes(date) {
  const diffInMs = Math.abs(currentDate - date);
  return diffInMs / (1000 * 60);
}

function getDiffInSeconds(date) {
  const diffInMs = Math.abs(currentDate - date);
  return diffInMs / 1000;
}

const getDiffernce = (date) => {
  const time = new Date(date);

  const diffInDays = Math.round(getDiffInDays(time));
  const diffInHours = Math.round(getDiffInHours(time));
  const diffInMin = Math.round(getDiffInMinutes(time));
  const diffInSec = Math.round(getDiffInSeconds(time));

  if (diffInDays != 0) {
    return diffInDays == 1 ? "a day ago" : `${diffInDays} days ago`;
  } else if (diffInHours != 0) {
    return `${diffInHours == 1 ? "an hour ago" : `${diffInHours} hours ago`}`;
  } else if (diffInMin != 0) {
    return diffInMin > 5 ? "few minutes ago" : `${diffInMin} minutes ago `;
  } else {
    return diffInSec > 30 ? "few secands ago" : `${diffInSec} secands ago`;
  }
};

export default getDiffernce;
