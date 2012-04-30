GithubUrl2CodeExamples = {
  parse: function(url) {
    var code = Meteor.http.get(url).content;

    // A weird quick way to parse the examples out
    var rawExamples = code.split('// Example start: ');
    if (rawExamples) {
      // get rid of the first one because it's source we don't care about
      rawExamples.shift();
      return !rawExamples ? [] : _.map(rawExamples, function(rawExample) {
        var endLabelIndex = rawExample.indexOf('\n');
        var label = rawExample.substr(0, endLabelIndex);
        var code = rawExample.substr(endLabelIndex).split('// Example end')[0];
        return {
          label: label,
          code: code
        }; 
      });
    }
    return [];
  }
};
