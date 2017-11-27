module.exports = {
  diskdb:{
    path: './'
  },
  google_spreadsheet_to_json: {
    credentials: './__google.auth.json', // put your google api credentials json path
    documents: {
      gid: 'xxYYZZZ00111222333', // your google id
      sheet: 0
    }
  },
  yaml:{
    documents:{
      path: '../_data/documents.yaml'
    }
  },
  contents: {
    path: './__contents'
  }
}