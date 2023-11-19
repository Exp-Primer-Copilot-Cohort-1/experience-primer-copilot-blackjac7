function skillsMember() {
  return {
    restrict: 'AE',
    templateUrl: 'views/skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '=',
      skills: '='
    }
  };
}