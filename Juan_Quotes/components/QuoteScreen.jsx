import React, { useState, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// Replace with your actual API Ninjas key
const API_KEY = 'UgWHVgFCNL7I4OZrsInjDoe2gwMWtjkXw0lc3cq5';
const API_URL = 'https://api.api-ninjas.com/v2/randomquotes';

export default function QuoteScreen() {
  const [quote, setQuote] = useState(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const fetchQuote = useCallback(async () => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setQuote(data[0]);
        setStatus('success');
      } else {
        throw new Error('No quote returned. Try again.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const isLoading = status === 'loading';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Quote of the Moment</Text>

        <View style={styles.contentArea}>
          {status === 'loading' && (
            <View style={styles.centeredBox}>
              <ActivityIndicator size="large" color="#4A55A2" />
              <Text style={styles.loadingText}>Fetching quote...</Text>
            </View>
          )}

          {status === 'success' && quote && (
            <View style={styles.card}>
              <Text style={styles.quoteMark}>“</Text>
              <Text style={styles.quoteText}>{quote.quote}</Text>
              <View style={styles.divider} />
              <Text style={styles.author}>— {quote.author || 'Unknown'}</Text>
              {quote.categories && quote.categories.length > 0 ? (
                <Text style={styles.category}>{quote.categories[0]}</Text>
              ) : null}
            </View>
          )}

          {status === 'error' && (
            <View style={styles.centeredBox}>
              <Text style={styles.errorIcon}>⚠️</Text>
              <Text style={styles.errorText}>{errorMessage}</Text>
              <TouchableOpacity style={styles.retryButton} onPress={fetchQuote}>
                <Text style={styles.buttonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={[styles.newQuoteButton, isLoading && styles.buttonDisabled]}
          onPress={fetchQuote}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Loading...' : 'New Quote'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E3352',
    textAlign: 'center',
    marginBottom: 12,
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 15,
    color: '#6B7280',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 28,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  quoteMark: {
    fontSize: 48,
    color: '#4A55A2',
    lineHeight: 48,
    marginBottom: -10,
  },
  quoteText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#2E3352',
    textAlign: 'center',
    fontStyle: 'italic',
    marginVertical: 8,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: '#E0E4F0',
    marginVertical: 12,
  },
  author: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A55A2',
  },
  category: {
    marginTop: 6,
    fontSize: 12,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  errorIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 15,
    color: '#B91C1C',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  retryButton: {
    backgroundColor: '#B91C1C',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  newQuoteButton: {
    backgroundColor: '#4A55A2',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A5ABD1',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});