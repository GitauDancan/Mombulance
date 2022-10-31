require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 1333);

module.exports = {
  Port: Port,
}