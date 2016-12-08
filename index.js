var jsonInput = $('#input-json')
var container = $('#container')
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
    input['release'] = merge(input.releases.slice(0, releaseNumber + 1))
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

$('#container').on("click", ".release-button", function(e) {
  render_json({"releaseNumber": $(this).data()["releaseNumber"]})
})

$('.hide-input-button').on("click", function(e) {
  e.preventDefault()
  toggleView(null)
})

$('#text-input').on("click", function(e) {
  e.preventDefault()
  toggleView("#input-json-container")
})

$('#url-input').on("click", function(e) {
  e.preventDefault()
  toggleView("#input-url-container")
})

$('#container').on("click", ".nav a", function(e) {
  e.preventDefault()
  if (!$(this).parent().hasClass("disabled")) {
    $(this).tab('show');

  }
})

$('#container').on("change", "#id-select", function(e) {
  e.preventDefault()
  render_json()
})
