var NOT_FLATTEN_KEYS = ['additionalIdentifiers', 
                        'additionalClassifications',
                        'suppliers',
                        'changes',
                        'tenderers'
                       ]


function flatten(obj) {
  var flattened = {};
  var flatten_object = function(path, obj) {
    Object.keys(obj).forEach(function (key){
      var value = obj[key];
      if (typeof(value) === "object" && NOT_FLATTEN_KEYS.indexOf(key) === -1) {
        if (Array.isArray(value)) {
          if (typeof(value[0]) === 'object' ){
            flatten_array(path.concat(key), value);
          } else {
            flattened[JSON.stringify(path.concat(key))] = value;
          }
        } else {
          flatten_object(path.concat(key), value);
        }
      } else {
        flattened[JSON.stringify(path.concat(key))] = value;
      }
    });
  }
  var flatten_array = function(path, obj) {
    obj.forEach(function (item, index){
      var id = item["id"];
      if (!id) {
        id = index;
      };
      flatten_object(path.concat([[id]]), item);
    });
  };
  flatten_object([], obj);
  return flattened;
}

function unflatten(flattened){
  var unflattened = {};
  Object.keys(flattened).forEach(function (flat_key_json){
    var current_pos = unflattened;
    var flat_key = JSON.parse(flat_key_json)
    var new_pos;
    for (var num = 0; num < flat_key.length; num++) {
      var new_pos = false;
      var item = flat_key[num]
      if (Array.isArray(item)) {
        current_pos.forEach(function (obj) {
          var obj_id = obj["id"];
          if (obj_id === item[0]) {
            new_pos = obj;
          }
        })
        if (!new_pos) {
          new_pos = {"id": item[0]}
          current_pos.push(new_pos);
        }
        current_pos = new_pos;
        continue;
      }
      new_pos = current_pos[item];
      if (!new_pos && flat_key.length - 1 === num) {
        current_pos[item] = flattened[flat_key_json];
        new_pos = current_pos
      } else if (!new_pos && Array.isArray(flat_key[num + 1])) {
        new_pos = []
        current_pos[item] = new_pos
      } else if (!new_pos) {
        new_pos = {}
        current_pos[item] = new_pos
      }
      current_pos = new_pos;
    }
  });
  return unflattened
}


function merge(releases) {
  var merged = {}
  releases.forEach(function(release) {
    var flat = flatten(release);
    Object.keys(flat).forEach(function (flat_key_json){
      merged[flat_key_json] = flat[flat_key_json];
    })
  })
  return unflatten(merged)
}

