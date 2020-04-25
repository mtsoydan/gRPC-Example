package io.grpc.helloworldexample;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JSONParser {

    public JSONParser(){

    }
    private JSONObject jObj = null;
    private String json = "";
    public JSONArray getStringToJSONArray(String text, String targetArray) throws JSONException {
         jObj = new JSONObject(text);
        JSONObject explrObject = null;
        JSONArray jsonArray = jObj.getJSONArray(targetArray);
        /*

        objeleri teker teker ele alma
        for (int i = 0; i < jsonArray.length(); i++) {
            explrObject  = jsonArray.getJSONObject(i);
        }*/

        return  jsonArray;
    }
    public JSONObject getStringToJSONObject(String text) throws JSONException {

        try {
            if (jObj !=null)
            {
                jObj = new JSONObject(text);
            }
            else
            {
                jObj =null;
            }
        }
        catch (JSONException e)
        {
            //
        }


        return  jObj;


    }
}
