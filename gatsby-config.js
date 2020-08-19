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
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Migraine',
            collection: 'migraines',
            map: doc => ({
              startHour: doc.startHour,
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
              intensity: doc.intensity
            }),
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
