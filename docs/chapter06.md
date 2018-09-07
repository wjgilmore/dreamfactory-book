# Chapter 6. Integrating Business Logic


## Calling Other APIs

Need to simplify this, using just a single loop rather than a nested syntax. Also, could probably just use a Laravel collection method and eliminate the loop altogether.

	$api = $platform['api'];
	$options = [];

	$responseBody = $event['response']['content'];

	foreach ($responseBody['resource'] as $n => $record) {
	    
	    $statusUpdates = [];
	    
	    if(isset($record['status_history'])) {
	    
	        foreach($record['status_history'] as $sh) {
	        
	           $translate = [];
	        
	           $translate['text'][] = $sh['STATUS'];
	           $translate['source'] = "English";
	           $translate['target'] = "Spanish";
	    
	           $payload = json_encode($translate);
	        
	           $url = "watson/";
	           $post = $api->post;
	           $result = $post($url, $payload, $options);    
	         
	           $sh['STATUS'] = $result['content']['translations'][0]['translation'];
	    
	           $statusUpdates[] = $sh;
	    
	        }
	    
	    }

	    $record['status_history'] = $statusUpdates;
	    
	    $responseBody['resource'][$n] = $record;
	    
	}

	$event['response']['content'] = $responseBody;