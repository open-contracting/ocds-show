var jsonInput = $('#input-json')
var URLInput  = $('#input-url')
var container = $('#results-container')
var message   = $('#message-container')
var currentView = null

var toggleView = function(id) {
  message.html("")
  if(currentView != null) $(currentView).addClass("hide")
  if(id != null) {
    $(id).removeClass("hide")
    currentView = id
  }
}

FileReaderJS.setupInput(document.getElementById('upload'), {
  readAsDefault: 'Text',
  on: {
    load: function (event, file) {
      jsonInput.val(event.target.result);
      render_json({"newData": true});
    }
  }
});

var loadURL = function(url) {
  console.log("loading " + url)
  $.ajax({
    url: url,
    datatype: 'json',
    success: function(result) {
      jsonInput.val(result);
      render_json({"newData": true});
    }
  })
}

var gettext = function(text) {
   return text
}
var env = nunjucks.configure()
// this needs replacing with something readable
env.addFilter('currency', function(number) {
   return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
})

var render_json = function (context) {
  context = context || {}
  var currentValue = jsonInput.val()

  if (!currentValue) {
    message.html('<h1> Welcome to OCDS Show. </h1> <h4>Please supply either an OCDS release or OCDS record. Use upload file or text input buttons above.</h4>')
    return
  }

  try {
    var input = JSON.parse(jsonInput.val())
  } catch (e) {
    message.html('<h2> Invalid JSON data </h2>')
    return
  }

  input['gettext'] = gettext

  if (input.hasOwnProperty("records")) {
    input.ocids = input.records.map(function (value) {
      return value.ocid
    })
    if (context.newData) {
      id = input.ocids[0]
    } else {
      id = $('#id-select').val()
    }
    input['ocid'] = id

    var current_record;

    input.records.some(function (value) {
      if (value.ocid === id) {
        current_record = value
        return true
      }
    })

    var releaseNumber = context["releaseNumber"] || 0
    input['releaseNumber'] = releaseNumber
    input['releases'] = current_record.releases

    var prev_release = merge(input.releases.slice(0, releaseNumber))
    var current_release =  merge(input.releases.slice(0, releaseNumber + 1))

    var changes = get_changes(flatten_all(prev_release), flatten_all(current_release))

    input['release'] = augment_path(current_release)

    //console.log(input['release'])

    //console.log(changes)

    function get_change(obj, field) {
      if (!obj) {return}
      var path = obj.__path;
      if (!path) {return}
      var path_list = JSON.parse(path)
      if (field) {
        path_list.push(field)
      }
      var full_path = JSON.stringify(path_list)
      return changes[full_path]
    }
    input['get_change'] = get_change

    container.empty()
    var content = env.render('record_select.html', input);
    container.append(content)
    var content = env.render('record_release.html', input);
    container.append(content)
  } else {
    input.release_ids = input.releases.map(function (value) {
      return value.id
    })
    if (context.newData) {
      id = input.release_ids[0]
    } else {
      id = $('#id-select').val()
    }
    var current_release;

    input.releases.some(function (value) {
      if (value.id === id) {
        current_release = value
        return true
      }
    })
    container.empty()
    input['release'] = current_release
    input['release_id'] = id
    var content = env.render('release_select.html', input);
    container.append(content)
    var content = env.render('release.html', input);
    container.append(content)
  }
}

jsonInput.val("")
render_json({"newData": true});

$('#input-json').on("input", function(e) {
  render_json({"newData": true});
})

$('#input-url').on("input", function(e) {
  loadURL(URLInput.val())
})

$('.hide-input-button').on("click", function(e) {
  e.preventDefault()
  toggleView(null)
})

$('#input-json-button').on("click", function(e) {
  e.preventDefault()
  toggleView("#input-json-container")
})

$('#input-url-button').on("click", function(e) {
  e.preventDefault()
  toggleView("#input-url-container")
})

container.on("click", ".release-button", function(e) {
  render_json({"releaseNumber": $(this).data()["releaseNumber"]})
})

container.on("click", ".nav a", function(e) {
  e.preventDefault()
  if (!$(this).parent().hasClass("disabled")) {
    $(this).tab('show');

  }
})

container.on("change", "#id-select", function(e) {
  e.preventDefault()
  render_json()
})
