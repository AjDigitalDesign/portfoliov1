// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'de12bl5v', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    token: 'skb470f2VF0Ae8pkPv7c9jNRhclnFCC35dUydxlva8i08yAQSLvaZphv7gWJd29XKywfUcqU5KwlLsiakV4aze6af8xxMMieJsWgJV3QDgKbYuCBZBeW1wAKh3KnyEgrMKIBqyXi0PFbWCx6derIts7DJieduRzHX2FosOIn8vazoconeHNs',
    useCdn: false // `false` if you want to ensure fresh data
})