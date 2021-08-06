const songs = [
  {
    "name": "Animal",
    "artist": "Def Leppard",
    "url": "https://open.spotify.com/track/1H1XrFD0eTismw06NBJoiJ?si=QYn9CYr4S5awTuLGKGnilg"
  },
  {
    "name": "Hysteria",
    "artist": "Def Leppard",
    "url": "https://open.spotify.com/track/2RWd4riqvRVk586L76g9Vq?si=tBOB4AWsR5qfdtFmrOZ13A"
  },
  {
    "name": "Tesco Disco",
    "artist": "The Kooks",
    "url": "https://open.spotify.com/track/6NWhfS1MxN5yTlDDH0ooRX?si=hrdnoyP2S-OYSbXnHoAhqQ"
  },
  {
    "name": "Initials for Gainsbourg",
    "artist": "The Kooks",
    "url":"https://open.spotify.com/track/3ylu9KBZYTyT92h9WYYskm?si=H2Nxqn9FTj6T16ReWfCe_g"
  },
  {
    "name": "No Pressureg",
    "artist": "The Kooks",
    "url": "https://open.spotify.com/track/3Dgm3Eaw7mBjYrGxdZxfjl?si=rgjfu-q3Sg6kqVVcQeiCHg"
  },
  {
    "name": "Forgive and Forget",
    "artist": "The Kooks",
    "url": "https://open.spotify.com/track/6TtWeGBbjKxAbsnXSnSjeO?si=GKntZoF9QcWroHgaYZbIxQ"
  },
  {
    "name": "Swing Low",
    "artist": "The Kooks",
    "url": "https://open.spotify.com/track/4spndiQ8ty1VJRsGFMGaJw?si=19iet6p8QDCQ-B-nz1yhoA"
  },
  {
    "name": "Rythm & Blues",
    "artist": "The Head and the Heart",
    "url": "https://open.spotify.com/track/5bAJhDTVCWVScr5Ev4LnB2?si=OJpzm6agSiasPmPcKu-REg"
  },
  {
    "name": "Your Mother's Eyes",
    "artist": "The Head and the Heart",
    "url": "https://open.spotify.com/track/02bMryG4ZLKreMbXROVuwz?si=lrNe8UbvQNOQZa0beSEpYQ"
  },
  {
    "name": "False Alarm",
    "artist": "The Head and the Heart",
    "url": "https://open.spotify.com/track/5Eioc2h0YdGVp3ah21nVdF?si=Xh_0szxuRYWB3wUR0dLvbQ"
  },
  {
    "name": "Simple as this",
    "artist": "Jake Bugg",
    "url": "https://open.spotify.com/track/59xYAblNy1Xr4U1IsJ3gZb?si=wCpOOKq9Tzuh7lexZWw-fw"
  },
  {
    "name": "Broken",
    "artist": "Jake Bugg",
    "url": "https://open.spotify.com/track/1Bph2KY0MA2JUiX5uADWjZ?si=ltv-iDf0TyKpNKGj6q_0nA"
  },
  {
    "name": "Side",
    "artist": "Travis",
    "url":"https://open.spotify.com/track/5gfmEhfgMIcV3He1wgDGJY?si=R8ywhXvNSxipLwGZUTUl5g"
  },
  {
    "name": "Closer",
    "artist": "Travis",
    "url": "https://open.spotify.com/track/7jP2937OACDPrN53DzO0Ye?si=TLGknlcYQk2sSdzoYVigvw"
  },
  {
    "name": "Funny Little Frog",
    "artist": "Belle and Sebastian",
    "url": "https://open.spotify.com/track/6QdA1d9sYaxx41IH1bvs69?si=58IvF_I3QS-A5u4EnyZvzA"
  },
  {
    "name": "Common People",
    "artist": "Pulp",
    "url": "https://open.spotify.com/track/2fXKyAyPrEa24c6PJyqznF?si=6M_Ngrk8Tz2vbIkxGlwWXQ"
  },
  {
    "name": "Disco 2000",
    "artist": "Pulp",
    "url": "https://open.spotify.com/track/2aC8wwfrM0YeTAzzk8hxqC?si=94JHLt2dS9i0YdzsVLmN8Q"
  },
  {
    "name": "Do You Remember The First Time",
    "artist": "Pulp",
    "url": "https://open.spotify.com/track/0txLC5NA64M8siGn3mnET0?si=DmT56Ow8TCShBp6YA4-Oxg"
  },
  {
    "name": "Something Changed",
    "artist": "Pulp",
    "url": "https://open.spotify.com/track/05FgZdqxXg40X0WG8MmWMA?si=gPguW1dPSsGz2fV2kSxQKA"
  },
  {
    "name": "Song To The Siren",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/album/5G3oIEkrH07sffZrAEJwGN?si=ro9auP7YRyOO-gaIJn5CrA"
  },
  {
    "name": "Vamonos de Viaje",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/6fE7ffZWTeeyLdYyQccx5S?si=YJAFSb-USPGx6EbR2rrcIw"
  },
  {
    "name": "El Club de la Montana",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/6fZUG9qlraawwtUuGbBO75?si=nAtESEUwSS68NtumQ-xKZQ"
  },
  {
    "name": "Mi Manera de Ser",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/5gLPJihYkhz3h7ZRIa2QO8?si=Gv9vYbAZQwSxuzfAczKx2A"
  },
  {
    "name": "Sin Senal",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/54urwGqn1noPWYDBpzTNLm?si=mHEy9fR0RvWEEIE9dqUL7A"
  },
  {
    "name": "Chu-Chu",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/24naWpzeHwB0kINEoX5hFK?si=ZEKVSL7TS2qnntFGg3OGBw"
  },
  {
    "name": "Los Puntos",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/7woYim3y8Xj5q2Oj2j5pyt?si=tcxyWrOoRTK8_pu9-Z2C9A"
  },
  {
    "name": "A la Cabeza",
    "artist": "Bandalos Chinos",
    "url": "https://open.spotify.com/track/59PDWf7CHx9ZFs3a47Uaxu?si=NtVIOVb5Q0S0YV4k4EXsmQ"
  },
  {
    "name": "Puente",
    "artist": "Gustavo Cerati",
    "url": "https://open.spotify.com/track/6gwaa6ElIixNTvu6RwkMyo?si=JmuTluAAR7KWtN2RZLbYvg"
  },
  {
    "name": "Lago en el Cielo",
    "artist": "Gustavo Cerati",
    "url": "https://open.spotify.com/track/17eJyYLIlMNlOqcwHYJ9F2?si=em1gcWxwRLGk6hdvmTjhjw"
  },
  {
    "name": "Me Quedo Aqui",
    "artist": "Gustavo Cerati",
    "url": "https://open.spotify.com/track/6lUBD8XA38zIFt6C0giPsP?si=RmbdGTfZQgeq17s-TpmRIg"
  },
  {
    "name": "Jugo de Luna",
    "artist": "Gustavo Cerati",
    "url": "https://open.spotify.com/track/3yDs6wQuSZ1Vvxm0uag51r?si=Rqfn9r5gQAeQOBrObR2OZw"
  },
  {
    "name": "En la Ciudad de la Furia",
    "artist": "Soda Stereo",
    "url": "https://open.spotify.com/track/2p4FOWHHd2A6TBmTkdt1G0?si=sJUn3RAsQcagXEV_yS18_A"
  },
  {
    "name": "Profugos",
    "artist": "Soda Stereo",
    "url": "https://open.spotify.com/track/1Tja3miBbbENpqIOAqGWXa?si=v_HNhqmsQVGGLmFFa-idTQ"
  },
  {
    "name": "Juegos de Seduccion",
    "artist": "Soda Stereo",
    "url": "https://open.spotify.com/track/39YibHWQJLIgjQ0xWKlq6t?si=SIjgDSgCTMaC9S6pGiv_Sg"
  },
  {
    "name": "En Algun Lugar",
    "artist": "Duncan Dhu",
    "url": "https://open.spotify.com/track/3UIENhLRdFIOuRan92cAQu?si=aA-0NF85RkyQ12kHKN-MGw"
  },
  {
    "name": "Lucha de Gigantes",
    "artist": "Nacha Pop",
    "url": "https://open.spotify.com/track/4nheObMzE4K8AIxIICoLgd?si=WHleOO54SpijPDD8ruAvBQ"
  },
  {
    "name": "Tren al sur",
    "artist": "Los Prisioneros",
    "url": "https://open.spotify.com/track/5nvS1vouQkX0HxOohfqCoS?si=MjW2prWnSeWmr4bcKtrqTg"
  },
  {
    "name": "Beautifully Unconventional",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/05I2kbWf5P3xdCVQve7apz?si=0CTL1hgZQWaMCRgD1hAvMA"
  },
  {
    "name": "Silk",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/5VWtavZNYlK6m6MQY6YRg1?si=Qj4se-oESH-jF-SwKDYXnA"
  },
  {
    "name": "Bros",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/2PIcAQiSOayFwJrfWc72Qc?si=fGoYuCjZRdOBzNqVFbbPTg"
  },
  {
    "name": "Sadboy",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/03DZjSbmLsQ0aAiqLwbQu2?si=VkVRvQriQnSXDci-XS31Ew"
  },
  {
    "name": "Freazy",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/6YYU9JbeWnW4L5NY7hlLlw?si=2ltQkkwlRYeCAp-rrPnAXA"
  },
  {
    "name": "Turn to Dust",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/2wWsqIpoTEB5jQV5m8Qia2?si=fa5wx0V7TOuh09llR7_rpA"
  },
  {
    "name": "Soapy Water",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/4erzEoxAeF7FjOGw7gSRFT?si=TkIQMxb2R_avUsySv55_iQ"
  },
  {
    "name": "The Wonderwhy",
    "artist": "Wolf Alice",
    "url": "https://open.spotify.com/track/7xsWb4kYqaUICtbOgT9tND?si=E3eXLI6aR_yaCxh0kwiVFg"
  },
  {
    "name": "The Mother We Share",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/3PvzvltQZLIKk9YgoMP3Yq?si=tFG2qFvSTkqwRg5OWQtAcQ"
  },
  {
    "name": "Get Out",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/5MbeIktglgTouqOHnVunxp?si=vs5dVm3YTz-F3F79xruQaA"
  },
  {
    "name": "Leave a trace",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/01DidSmPasiXdPhDVuaULL?si=dPzuFIRHQwmhwAO5upoP1g"
  },
  {
    "name": "Bury it",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/35yJgLFoyT39UGJhyeNhzb?si=ozM_xNO5SmODDMqRTIobmA"
  },
  {
    "name": "Recover",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/4QQg6DXsx6G3lv3W4A15CZ?si=eskhGkfJS4WPPTLwOnry9A"
  },
  {
    "name": "Lies",
    "artist": "Chvrches",
    "url": "https://open.spotify.com/track/2N127y5vyqdwEe6gDZSxs0?si=FjDiO6PPRpWvAioozhz4Qw"
  },
  {
    "name": "Up",
    "artist": "Sing Street",
    "url": "https://open.spotify.com/track/44TV58bBAJnBO9keXGFUJM?si=3FQxhqgSS62xjfS6pcJC7g"
  },
  {
    "name": "Drive it like you stole it",
    "artist": "Sing Street",
    "url": "https://open.spotify.com/track/2ZBiHAwdeCnrKvXap6Yzef?si=j-YKNoeYQDazRcQEHOLu_Q"
  },
  {
    "name": "The Lovers are losing",
    "artist": "Keane",
    "url": "https://open.spotify.com/track/3nrDwJxJ4wU264Gs1oBgnd?si=nirN_UvBSUKD1tw2q-PgOg"
  },
  {
    "name": "Perfect Symmetry",
    "artist": "Keane",
    "url": "https://open.spotify.com/track/01c65VW4oszVjYNOoLzymZ?si=7X_QY5DcTWOgc8fh6IlNKQ"
  },
  {
    "name": "You Are Young",
    "artist": "Keane",
    "url": "https://open.spotify.com/track/2O748MOUwfYrYHZDTImOeA?si=P1zKm5KdQuKiCnAhD7Dc3g"
  },
  {
    "name": "I feel it coming",
    "artist": "The Weeknd",
    "url": "https://open.spotify.com/track/3dhjNA0jGA8vHBQ1VdD6vV?si=kzmQlGy8TNW51iD09Seocw"
  },
  {
    "name": "Say Something",
    "artist": "Kylie Minogue",
    "url": "https://open.spotify.com/track/6FG0Mgz3S4aiCIheLLzJTr?si=am-4GUMTSPWz-Bapc6yqfA"
  },
  {
    "name": "Magic",
    "artist": "Kylie Minogue",
    "url": "https://open.spotify.com/track/0I4658wYMK45Ffx1IlKRjG?si=0vxqO43YSyCbUo190G0tvg"
  },
  {
    "name": "Treehouse",
    "artist": "Cory Wong",
    "url": "https://open.spotify.com/track/1sZvOfUl5tXwKtDDLYwGyl?si=45VU8mgeTbuUCQxeahCv-Q"
  },
  {
    "name": "Juke on Jelly",
    "artist": "Cory Wong",
    "url": "https://open.spotify.com/track/3kl2pnS9QTFOP7HgIe3G7K?si=DE36uSk_Tb-7Nvc0TL3x9Q"
  },
  {
    "name": "Wish You Were Here",
    "artist": "Pink Floyd",
    "url": "https://open.spotify.com/track/411GLjM61AhutwQGmDRIne?si=3psTyCVlROyzLHBtO9lTBg"
  },
  {
    "name": "California",
    "artist": "Jamestown Revival",
    "url": "https://open.spotify.com/track/14A2dKF4O0kQD0E5CCX3Jc?si=am5_iV32T_6atqJU0COOTg"
  },
  {
    "name": "Medicine",
    "artist": "Jamestown Revival",
    "url": "https://open.spotify.com/track/4mjZoFiRvgp9lClzSD9Hnk?si=-tU4DJ15QzioxORvO2LURQ"
  },
  {
    "name": "Here comes the sun",
    "artist": "The Beatles",
    "url": "https://open.spotify.com/track/45yEy5WJywhJ3sDI28ajTm?si=3_1dxZIYQ8OGoZ-Swg4HWA"
  },
  {
    "name": "With a little help from my friends",
    "artist": "The Beatles",
    "url": "https://open.spotify.com/track/2RnPATK99oGOZygnD2GTO6?si=p7A1fwfpQveFus6p4XrmFA"
  },
  {
    "name": "Blackbird",
    "artist": "The Beatles",
    "url": "https://open.spotify.com/track/5jgFfDIR6FR0gvlA56Nakr?si=5elqx8lESRibozE4fXaEHA"
  },
  {
    "name": "He venido a pedirte perdon",
    "artist": "Juan Gabriel",
    "url": "https://open.spotify.com/track/41oflb2bm2OVWyYIGWOErN?si=P94ckkJ0RsSlzp61cqYPSQ"
  },
  {
    "name": "Diane Young",
    "artist": "Vampire Weekend",
    "url": "https://open.spotify.com/track/10f0hrbCBiQk9STrFG3EU7?si=VTlULfhCQza6BVjLnv5bSw"
  },
  {
    "name": "Somebody Else",
    "artist": "The 1975",
    "url": "https://open.spotify.com/track/5hc71nKsUgtwQ3z52KEKQk?si=mWs9QLm3SMOzsvh7CnWmqw"
  },
  {
    "name": "Robbers",
    "artist": "The 1975",
    "url": "https://open.spotify.com/track/06cCziAHtDg6pcsidZHu03?si=7T72fxtPSbyRLz7scYSmVw"
  },
  {
    "name": "I Always Wanna Die",
    "artist": "The 1975",
    "url": "https://open.spotify.com/track/7iPlcFvOMOzt6v0QvcAueZ?si=FGwyNp3UQMy70iDaAvbLmw"
  },
  {
    "name": "If You're Too Shy",
    "artist": "The 1975",
    "url": "https://open.spotify.com/track/3iEqGBZ2wcpVzhiAcwXVC6?si=lDZPoBcJSLSIcetLuDgn2A"
  }
]

module.exports = songs;