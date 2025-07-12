const now = new Date()
  console.log(now)
  console.log("Yıl",now.getFullYear())
  console.log("Ay",now.getMonth())
  console.log("gün", now.getDate)
  console.log("Saat",now.getHours(), "Dakika",now.getMinutes(),"Saniye",now.getSeconds())

  const date = new Date()
  let year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds()
      dayNumber = date.getDay()


      let months = [
            'Ocak',
            'Şubat',
            'Mart',
            'Nisan',
            'MAyıs',
            'Haziran',
            'Temmuz',
            'Ağustos',
            'Eylül',
            'Ekim',
            'Kasım',
            'Aralık'
      ]
      let days = [
            'Pazar',
            'Pazartesi',
            'Salı',
            'Çarşamba',
            'Perşembe',
            'Cuma',
            'Cumartesi'
      ]

      let hummanReadleDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`
      console.log(hummanReadleDate)