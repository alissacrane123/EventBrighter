export const fetchEvents = filters => {  

  return $.ajax({
    method: 'GET',
    url: '/api/events',
    data: { filters }
  })
};

export const fetchEvent = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  })
}