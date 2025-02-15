const liffId = "2006065768-no9MYKVg";
liff
  .init({ liffId: liffId })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    liff
      .shareTargetPicker(
        [
          {
            "type": "flex",
            "altText": "This is a Flex Message",
            "contents": {
              "type": "bubble",
              "size": "mega",
              "hero": {
                "type": "image",
                "url": "https://img2.pic.in.th/pic/S__1802750.jpg",
                "size": "full",
                "aspectMode": "cover",
                "action": {
                  "type": "uri",
                  "uri": "https://line.me/"
                }
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ไฮโลมันส์ไม่มีหยุด! เล่นได้ 24 ชั่วโมง 🚀",
                    "weight": "bold",
                    "size": "sm",
                    "wrap": true
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "margin": "md",
                    "contents": [
                      {
                        "type": "text",
                        "text": "🌏คะแนนความประทับใจ",
                        "weight": "bold",
                        "size": "sm"
                      },
                      {
                        "type": "icon",
                        "size": "sm",
                        "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "size": "sm",
                        "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "size": "sm",
                        "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "size": "sm",
                        "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                      },
                      {
                        "type": "icon",
                        "size": "sm",
                        "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                      },
                      {
                        "type": "text",
                        "text": "5.0",
                        "size": "sm",
                        "color": "#999999",
                        "margin": "md",
                        "flex": 0
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "▶️ เปิดไมค์สอบถามเจ้าได้พูดคุยกับเจ้าได้ในกลุ่ม LINE",
                            "weight": "bold",
                            "wrap": true,
                            "color": "#ac1e00"
                          },
                          {
                            "type": "text",
                            "text": "🎲ทุกการเล่น ไลฟ์สดโชว์ตลอดเกมส์ ติดปัญหาด้านใดมีแอดมินคอยบริการ",
                            "weight": "bold",
                            "wrap": true
                          },
                          {
                            "type": "text",
                            "wrap": true,
                            "color": "#666666",
                            "size": "sm",
                            "weight": "bold",
                            "contents": [
                              {
                                "type": "span",
                                "text": "🟢 ไลฟ์สดเดิมพัน",
                                "size": "xs"
                              },
                              {
                                "type": "span",
                                "text": " ป้องกันการทุจริต",
                                "size": "xs",
                                "color": "#ac1e00"
                              }
                            ],
                            "flex": 5
                          },
                          {
                            "type": "text",
                            "wrap": true,
                            "color": "#666666",
                            "size": "sm",
                            "weight": "bold",
                            "contents": [
                              {
                                "type": "span",
                                "text": "🟢 ไลฟ์สดเดิมพัน",
                                "size": "xs"
                              },
                              {
                                "type": "span",
                                "text": " ไม่มีการล็อคผล",
                                "size": "xs",
                                "color": "#ac1e00"
                              }
                            ],
                            "flex": 5
                          },
                          {
                            "type": "text",
                            "wrap": true,
                            "color": "#666666",
                            "size": "sm",
                            "weight": "bold",
                            "contents": [
                              {
                                "type": "span",
                                "text": "🟢 ไลฟ์สดเดิมพัน",
                                "size": "xs"
                              },
                              {
                                "type": "span",
                                "text": " พูดคุยกับเพื่อนได้",
                                "size": "xs",
                                "color": "#ac1e00"
                              }
                            ],
                            "flex": 5
                          },
                          {
                            "type": "text",
                            "wrap": true,
                            "color": "#666666",
                            "size": "sm",
                            "weight": "bold",
                            "contents": [
                              {
                                "type": "span",
                                "text": "🟢 มีโปรแกรมสรุปยอด\nไม่ต้องรอแอดมินคิดยอด คิดยอดได้ทันที ถอนได้ทันที‼️",
                                "size": "xs"
                              }
                            ],
                            "flex": 5
                          },
                          {
                            "type": "text",
                            "wrap": true,
                            "color": "#666666",
                            "size": "sm",
                            "weight": "bold",
                            "contents": [
                              {
                                "type": "span",
                                "text": "🟢 เปิดให้บริการมาแล้ว 5 ปี มั่นคง ปลอดภัย",
                                "size": "xs"
                              }
                            ],
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "action": {
                      "type": "uri",
                      "label": "เข้ากลุ่ม",
                      "uri": "https://line.me/R/ti/g/ksvUbmewvP"
                    }
                  },
                  {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "action": {
                      "type": "postback",
                      "label": "แชร์ต่อให้เพื่อน",
                      "data": "hello"
                    },
                    "color": "#650000"
                  },
                  {
                    "type": "button",
                    "style": "secondary",
                    "height": "sm",
                    "action": {
                      "type": "uri",
                      "label": "ติดต่อแอดมิน",
                      "uri": "https://lin.ee/Wh7yl5n"
                    }
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [],
                    "margin": "sm"
                  }
                ],
                "flex": 0
              }
            }
          }
        ],
        {
          isMultiple: true
        }
      );
    window.close()
  })
  .catch((err) => {
    console.log(err.code, err.message);
  });
