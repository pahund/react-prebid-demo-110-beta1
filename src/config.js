export default {
  slots: [
    {
      id: "div-1",
      path: "/19968336/header-bid-tag-1",
      //sizes: [[728, 90], [970, 90]],
      sizes: [[320, 250]],
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: [[320, 250]]
              //sizes: [[728, 90], [970, 90]]
            }
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: 13144370
              }
            }
          ]
        }
      ]
    }
  ]
};
