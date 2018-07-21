import {Products} from "./store_reducer/reducer";


export const initialState = {
    count:0,
    cat:[
        {
            "ProductName": "Shoe Dog",
            "FileLink": "https://amzn.to/2IDmUHD",
            "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1501135910&asins=1501135910&linkId=b6c7fa0d93ce3ffd9c933da03048fa83&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF\"></iframe>",
            "BriefContent": "A fantastic memoir about entrepreneural courage and conviction. Don't start your entrepreneural dream without reading this book",
            "Author": "Phil Knight",
            "Rating": 9
        },
        {
            "ProductName": "The Everything Store:Jeff Bezos And The Age Of Amazon",
            "FileLink": "https://amzn.to/2Kw9MZV",
            "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=0316219282&asins=0316219282&linkId=cb412f8d440b72ce013c961611533caf&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
            "BriefContent": "A great book on risk taking and ensuring we have no regret at the end of our lives. This is the book that convinced me to start my entrepreneural journey.",
            "Author": "Brad Stone",
            "Rating": 8.5
        }
        ],
    products:[
      {
          "ProductName": "Shoe Dog",
          "FileLink": "https://amzn.to/2IDmUHD",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1501135910&asins=1501135910&linkId=b6c7fa0d93ce3ffd9c933da03048fa83&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF\"></iframe>",
          "BriefContent": "A fantastic memoir about entrepreneural courage and conviction. Don't start your entrepreneural dream without reading this book",
          "Author": "Phil Knight",
          "Rating": 9
      },
      {
          "ProductName": "The Everything Store:Jeff Bezos And The Age Of Amazon",
          "FileLink": "https://amzn.to/2Kw9MZV",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=0316219282&asins=0316219282&linkId=cb412f8d440b72ce013c961611533caf&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "A great book on risk taking and ensuring we have no regret at the end of our lives. This is the book that convinced me to start my entrepreneural journey.",
          "Author": "Brad Stone",
          "Rating": 8.5
      },
      {
          "ProductName": "E-myth Revisited: Why Most Small Businesses Don't Work and What to Do About It",
          "FileLink": "https://amzn.to/2Kw1u16",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=B000RO9VJK&asins=B000RO9VJK&linkId=f8eaa402ee5b533478d467b4063ad7e6&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "Action packed, tough reality check of the peril of entrepreseurship. Emphasis on the difference between Entrepreneur, Manager and Technical person. Don't start your entrepreneural journey without reading this book.",
          "Author": "Michael E. Gerber",
          "Rating": 8
      },
      {
          "ProductName": "The Personal MBA - Master The Art of Business",
          "FileLink": "https://amzn.to/2N91jKM",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1591845572&asins=1591845572&linkId=fce293f85b66b0a783edb8d2a2fd2949&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "The book I wish I read, prior to getting my expensive business school education. If you are debating when an MBA is worth it, read this book first. I agree with the author. Save the money and time, there are cheaper and better ways in the age of the internet!",
          "Author": "Josh Kaufman",
          "Rating": 9
      },
      {
          "ProductName": "80/20 Sales And Marketing",
          "FileLink": "https://amzn.to/2KuHV9b",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1599185059&asins=1599185059&linkId=9efb33673a9bc07901593abb591b5f87&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "A must read for anyone interested in what it takes to build a successful online business. Perry Marshall is one of my favorite business heroes based on this work. I learned how to prioritize, the importance of understanding the economics of online Advertisement!",
          "Author": "Perry Marshall",
          "Rating": 9.5
      },
      {
          "ProductName": "Idea Man",
          "FileLink": "https://amzn.to/2lN4yLH",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1591845378&asins=1591845378&linkId=5b55f13c98494c6908c783002b2ff187&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "A fantastic memoir by one of the guys who gave us the computer age. In this great book, I learned how chance meeting, opportunities can shape human destinies. Also how a fantastic friendhip can go south due to human greed. Paul told the story the beginning of Microsoft that only him could have done.",
          "Author": "Paul Allen",
          "Rating": 9
      },
      {
          "ProductName": "The 4-Hour Workweek",
          "FileLink": "https://amzn.to/2Kzxz86",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=0307465357&asins=0307465357&linkId=ec1629b57ffcb5a5ad1ac7e1f9151982&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "Champion of the 'freelance' economy movement. One of the last book I read before I said goodbye to corporate America. Key take away, don't wait till old age to build someone else's dream.",
          "Author": "Timothy Ferries",
          "Rating": 8.5
      },
      {
          "ProductName": "Make Your Bed",
          "FileLink": "https://amzn.to/2tRm4Se",
          "ImageLink": "<iframe style=\"width:120px;height:240px;\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\" src=\"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=babskenky-20&marketplace=amazon&region=US&placement=1455570249&asins=1455570249&linkId=0fca37a73f4a25f36073d91730800cea&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff\"></iframe>",
          "BriefContent": "Military hero, teaches us a simple lesson on doing the simple things well before undertaking big one. If you are",
          "Author": "William H. McRaven",
          "Rating": 7.5
      }
  ]

}
