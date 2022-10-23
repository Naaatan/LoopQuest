console.log('contentscript.js started');

var items = $.map($('li.some-item'),
                  function(elem, i) {
                      return elem.text;
                  });

chrome.runtime.sendMessage({"items": items,},
                           function(response) {
                                console.log('message sent');
                           });
