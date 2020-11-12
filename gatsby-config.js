/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Migrainius',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Layout`),
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Migraine',
            collection: 'migraines',
            map: doc => ({
              year: doc.year,
              startDayNumber: doc.startDayNumber,
              startDayDay: doc.startDayDay,
              startDayMonth: doc.startDayMonth,
              startHour: doc.startHour,
              endDayNumber: doc.endDayNumber,
              endDayDay: doc.endDayDay,
              endDayMonth: doc.endDayMonth,
              endHour: doc.endHour,
              medicationTaken: doc.medicationTaken,
              medicationName: doc.medicationName,
              medicationQuantity: doc.medicationQuantity,
              medicationEfficiency: doc.medicationEfficiency,
              activityAtStart: doc.activityAtStart,
              hypoglycemic: doc.hypoglycemic,
              physicalActivity: doc.physicalActivity,
              stressed: doc.stressed,
              angry: doc.angry,
              hoursOfSleep: doc.hoursOfSleep,
              minutesOfSleep: doc.minutesOfSleep,
              intensity: doc.intensity,
              user: doc.user
            }),
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
