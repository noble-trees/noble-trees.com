export default function() {

  this.get('/artists', () => ({
    artists: [
      { id: 1, name: 'Cheyenne' },
      { id: 2, name: 'Tim' },
      { id: 3, name: 'Trey' }
    ]
  }));

  this.get('/shows', () => ({
    shows: [
      { id: 1, name: 'Austin Pagan Pride' },
      { id: 2, name: 'HavenCon 2016' }
    ]
  }));

}
