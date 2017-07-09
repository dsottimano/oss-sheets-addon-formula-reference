{
	"semrush": [
        
        {

			"usage": "Organic hsitory for a domain",
			"formula": "DOMAIN_OVERVIEW_SEMRUSH(domain,db,includeHeader,date)",
			"example": "DOMAIN_OVERVIEW_SEMRUSH(\"example.com\",\"us\",false,201601)"

		},
        {

			"usage": "Organic keywords for a domain",
			"formula": "DOMAIN_ORGANIC_KEYWORDS_SEMRUSH(domain, filterBy, matchType, query, limit, db, includeHeader, date)",
			"example": "DOMAIN_ORGANIC_KEYWORDS_SEMRUSH(\"example.com\", true, true, \"apartments\", 10, \"us\", true, 201601)"

		},
		{
			"usage": "Organic keywords per URL",
            "formula" : "URL_ORGANIC_KEYWORDS_SEMRUSH(url, includeHeader, limit, db)",
			"example": "URL_ORGANIC_KEYWORDS_SEMRUSH(\"http://example.com\", true, \"10\", \"us\")"

		},
        {
			"usage": "Keyword Difficulty for a keyword",
            "formula" : "KEYWORD_DIFFICULTY_SEMRUSH(query, includeHeader, db)",
			"example": "KEYWORD_DIFFICULTY_SEMRUSH(\"aparments\", false, \"us\")"

		},
        {
			"usage": "Google search results for a keyword",
            "formula" : "SERPS_SEMRUSH(query, limit, db)",
			"example": "SERPS_SEMRUSH(\"apartments\", 10, \"us\")"

		},
        {
			"usage": "Related keywords for a keyword",
            "formula" : "RELATED_QUERIES_SEMRUSH(query, includeHeader, limit, db)",
			"example": "RELATED_QUERIES_SEMRUSH(\"apartments\", false, 10, \"us\")"

		},
        {
			"usage": "Search volume for a keyword",
            "formula" : "KEYWORD_VOLUME_SEMRUSH(query, includeHeader, db)",
			"example": "KEYWORD_VOLUME_SEMRUSH(\"apartments\", false, \"us\")"

		}
	],

	"sistrix": [{
			"usage": "Visibility Index",
			"formula": "VISIBILITY_INDEX_SISTRIX (type,url,country,mobile,date,history,excludeHeaders)",
			"exammple": "VISIBILITY_INDEX_SISTRIX (type,url,country,mobile,date,history,excludeHeaders)"

		},
		{
			"usage": "Keywords in Google serps for domain",
			"formula": "DOMAIN_KEYWORD_COUNT_SISTRIX(type,url,country,mobile,date,history,excludeHeaders)",
			"exammple": "DOMAIN_KEYWORD_COUNT_SISTRIX(\"domain\", \"example.com\", \"us\", true, 2016-09-15, true, true)"

		},

	]



}



