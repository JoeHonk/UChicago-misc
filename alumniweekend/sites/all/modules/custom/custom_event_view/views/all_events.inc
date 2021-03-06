<?php 
$view = new view();
$view->name = 'all_events';
$view->description = '';
$view->tag = 'default';
$view->base_table = 'node';
$view->human_name = 'All Events';
$view->core = 7;
$view->api_version = '3.0';
$view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

/* Display: Master */
$handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['title'] = 'All Events';
$handler->display->display_options['use_ajax'] = TRUE;
$handler->display->display_options['use_more_always'] = FALSE;
$handler->display->display_options['access']['type'] = 'perm';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
$handler->display->display_options['exposed_form']['options']['autosubmit'] = TRUE;
$handler->display->display_options['pager']['type'] = 'none';
$handler->display->display_options['pager']['options']['offset'] = '0';
$handler->display->display_options['style_plugin'] = 'list';
$handler->display->display_options['style_options']['row_class_special'] = FALSE;
$handler->display->display_options['row_plugin'] = 'fields';
/* Field: Content: Title */
$handler->display->display_options['fields']['title']['id'] = 'title';
$handler->display->display_options['fields']['title']['table'] = 'node';
$handler->display->display_options['fields']['title']['field'] = 'title';
$handler->display->display_options['fields']['title']['label'] = '';
$handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
$handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
$handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
/* Field: Content: Day */
$handler->display->display_options['fields']['field_day']['id'] = 'field_day';
$handler->display->display_options['fields']['field_day']['table'] = 'field_data_field_day';
$handler->display->display_options['fields']['field_day']['field'] = 'field_day';
$handler->display->display_options['fields']['field_day']['label'] = '';
$handler->display->display_options['fields']['field_day']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['field_day']['type'] = 'taxonomy_term_reference_plain';
/* Field: Content: Start Time */
$handler->display->display_options['fields']['field_start_time']['id'] = 'field_start_time';
$handler->display->display_options['fields']['field_start_time']['table'] = 'field_data_field_start_time';
$handler->display->display_options['fields']['field_start_time']['field'] = 'field_start_time';
$handler->display->display_options['fields']['field_start_time']['label'] = '';
$handler->display->display_options['fields']['field_start_time']['element_label_colon'] = FALSE;
/* Field: Content: End Time */
$handler->display->display_options['fields']['field_end_time']['id'] = 'field_end_time';
$handler->display->display_options['fields']['field_end_time']['table'] = 'field_data_field_end_time';
$handler->display->display_options['fields']['field_end_time']['field'] = 'field_end_time';
$handler->display->display_options['fields']['field_end_time']['label'] = '';
$handler->display->display_options['fields']['field_end_time']['element_label_colon'] = FALSE;
/* Field: Content: Location */
$handler->display->display_options['fields']['field_location']['id'] = 'field_location';
$handler->display->display_options['fields']['field_location']['table'] = 'field_data_field_location';
$handler->display->display_options['fields']['field_location']['field'] = 'field_location';
$handler->display->display_options['fields']['field_location']['label'] = '';
$handler->display->display_options['fields']['field_location']['element_label_colon'] = FALSE;
/* Field: Content: Body */
$handler->display->display_options['fields']['body']['id'] = 'body';
$handler->display->display_options['fields']['body']['table'] = 'field_data_body';
$handler->display->display_options['fields']['body']['field'] = 'body';
$handler->display->display_options['fields']['body']['label'] = '';
$handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
/* Field: Content: Tags */
$handler->display->display_options['fields']['field_event_tags']['id'] = 'field_event_tags';
$handler->display->display_options['fields']['field_event_tags']['table'] = 'field_data_field_event_tags';
$handler->display->display_options['fields']['field_event_tags']['field'] = 'field_event_tags';
$handler->display->display_options['fields']['field_event_tags']['label'] = '';
$handler->display->display_options['fields']['field_event_tags']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['field_event_tags']['type'] = 'taxonomy_term_reference_plain';
$handler->display->display_options['fields']['field_event_tags']['delta_offset'] = '0';
/* Field: Content: Class */
$handler->display->display_options['fields']['field_class']['id'] = 'field_class';
$handler->display->display_options['fields']['field_class']['table'] = 'field_data_field_class';
$handler->display->display_options['fields']['field_class']['field'] = 'field_class';
$handler->display->display_options['fields']['field_class']['label'] = '';
$handler->display->display_options['fields']['field_class']['exclude'] = TRUE;
$handler->display->display_options['fields']['field_class']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['field_class']['delta_offset'] = '0';
/* Sort criterion: Content: Day (field_day) */
$handler->display->display_options['sorts']['field_day_tid']['id'] = 'field_day_tid';
$handler->display->display_options['sorts']['field_day_tid']['table'] = 'field_data_field_day';
$handler->display->display_options['sorts']['field_day_tid']['field'] = 'field_day_tid';
$handler->display->display_options['sorts']['field_day_tid']['expose']['label'] = 'Day';
/* Sort criterion: Content: Start Time (field_start_time) */
$handler->display->display_options['sorts']['field_start_time_value']['id'] = 'field_start_time_value';
$handler->display->display_options['sorts']['field_start_time_value']['table'] = 'field_data_field_start_time';
$handler->display->display_options['sorts']['field_start_time_value']['field'] = 'field_start_time_value';
/* Filter criterion: Content: Published */
$handler->display->display_options['filters']['status']['id'] = 'status';
$handler->display->display_options['filters']['status']['table'] = 'node';
$handler->display->display_options['filters']['status']['field'] = 'status';
$handler->display->display_options['filters']['status']['value'] = 1;
$handler->display->display_options['filters']['status']['group'] = 1;
$handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
/* Filter criterion: Content: Type */
$handler->display->display_options['filters']['type']['id'] = 'type';
$handler->display->display_options['filters']['type']['table'] = 'node';
$handler->display->display_options['filters']['type']['field'] = 'type';
$handler->display->display_options['filters']['type']['value'] = array(
  'event' => 'event',
);

/* Display: Block */
$handler = $view->new_display('block', 'Block', 'block');
$handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
$views[$view->name] = $view;

?>