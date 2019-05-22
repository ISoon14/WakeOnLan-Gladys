module.exports = function createSentences(){
	sails.log.debug('Début installation des sentences');
	var arraySentence = [{
	    'uuid': '66027c3b-e396-47bf-9c52-8a4c6737bde5',
		'text': 'Allume pc', 
		'label': 'wake',
		'status': 'approved',
		'service': 'wakeonlan',
		'language': 'fr'
	}]

	var arrayAnswer = [{
	    'uuid': '0e3ca89e-5380-4d6d-a1d8-5205a6459b2b',
		'text': 'Ordinateur allumé',
		'label': 'pcopen',
		'needAnswer': 0,
		'language' : 'fr'
	}]

	arraySentence.forEach(function(Sentence) {
		gladys.sentence.create(Sentence)
	})

	arrayAnswer.forEach(function(Answer) {
		gladys.answer.create(Answer)
	})

	gladys.brain.trainNew()

	sails.log.debug('Fin installation des sentences');
}