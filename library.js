{
	"semrush": [{
			"usage": "Organic keywords for a domain",
			"formula": "domainOrganicKeywords(domain, filterBy, matchType, query, limit, db, includeHeader, date)",
			"example": "domainOrganicKeywords(\"example.com\", true, true, \"apartments\", 10, \"us\", true, 201601)"

		},
		{
			"usage": "Organic keywords per URL",
            "formula" : "urlOrganicKeywords(url, includeHeader, limit, db)",
			"example": "urlOrganicKeywords(\"http://example.com\", true, \"10\", \"us\") ",

		},
        {
			"usage": "Keyword Difficulty for a keyword",
            "formula" : "keywordDifficulty(query, includeHeader, db)",
			"example": "keywordDifficulty(\"aparments\", false, \"us\")",

		},
        {
			"usage": "Google search results for a keyword",
            "formula" : "serps(query, limit, db)",
			"example": "serps(\"apartments\", 10, \"us\")",

		},
        {
			"usage": "Related keywords for a keyword",
            "formula" : "relatedQueries(query, includeHeader, limit, db)",
			"example": "relatedQueries(\"apartments\", false, 10, \"us\")",

		},
        {
			"usage": "Search volume for a keyword",
            "formula" : "keywordVolume(query, includeHeader, db)",
			"example": "keywordVolume(\"apartments\", false, \"us\")",

		}
	],

	"sistrix": [{
			"name": "domaisdsassn overview",
			"Formula": "whatever()",
			"Description": "blahblah"

		},
		{
			"name": "domain osdvsdgvdverview",
			"Formula": "whatever()",
			"Description": "blahblah"

		}

	]



}



